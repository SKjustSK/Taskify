class Task {
    // priority goes high and normal
    constructor (title, desc, deadline, priority, completion)
    {
        this.title = title;
        this.desc = desc;
        this.deadline = deadline;
        this.priority = priority;
        this.completion = completion;
    }

    isEqual(otherTask)
    {
        return this.title === otherTask.title &&
               this.desc === otherTask.desc &&
               this.deadline === otherTask.deadline &&
               this.priority === otherTask.priority &&
               this.completion === otherTask.completion;
    }

    markComplete()
    {
        this.completion = true;
    }
    
    markIncomplete()
    {
        this.completion = false;
    }
}

export default Task;