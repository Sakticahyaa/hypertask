import {Notice} from "../models/notification"
import {Task} from "../models/task"
export const createTask  = async (req, res) => {
    try {
        const {
            title, team, stage, date, priority, assets

        } = req.body;
          
        const task = await Task.create({
            title,
            team,
            stage : stage.toLowerCase(),
            date,
            priority: priority.toLowerCase(),
            assets,
        }); 
        let text = " New task has been assigned to you"
        if (task.team.length > 1) {
            text += ` and ${task.team.length - 1} others`;
        
      }
      text = text + ` The task priority is set a ${task.priority} priority, so check and act accordingly. The task date is ${task.date.toDateString()}. Thank you!`;
      await Notice.create({
        team,
        text,
        task:task._id
      });
       res.status(200).json({status:true, message: "Task created successfully"});

      } catch (error) {
        console.log(error);
        res.status(400).json({ status: false, message: error.message });
      }
      
    };

    export const duplicateTask  = async (req, res) => {
        try {
            const {id} = req.params;
              
            const task = await Task.findById(id);
            const newTask= await Task.create({
                ...task,
                title:task.title + "-Duplicate",
            })
            newTask.team = task.team;
            newTask.subTasks = task.subTasks;
            newTask.assets = task.assets;
            newTask.priority = task.priority;
            newTask.stage = task.stage;
            await newTask.save();
            let text = " New task has been assigned to you"
            if (task.team.length > 1) {
                text += ` and ${task.team.length - 1} others`;
            
          }
          text = text + ` The task priority is set a ${task.priority} priority, so check and act accordingly. The task date is ${task.date.toDateString()}. Thank you!`;
          await Notice.create({
            team,
            text,
            task:newTask._id
          });
           
           res.status(200).json({status:true, message: "Task created successfully"});
           
          } catch (error) {
            console.log(error);
            res.status(400).json({ status: false, message: error.message });
          }
          
        };
    export const postTaskActivity  = async (req, res) => {
            try {
                const {id} = req.params;
                const {userId}= req.user;
                const {type, activity} = req.params;
                const task = await Task.findById(id);

                const data = {
                    type,
                    activity,
                    by: userId
                };

                task.activate.push(data);

                await task.save();

                res.status(200).json({ status: true, message: "Activity psoted successfully"});
                
               
              } catch (error) {
                console.log(error);
                res.status(400).json({ status: false, message: error.message });
              }
              
            };