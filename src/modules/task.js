class Task {
    // priority goes high and normal
    constructor (title, desc, deadline, priority, completion)
    {
        this.title = title;
        this.desc = desc;
        this.deadline = deadline; // Date object
        this.priority = priority; 
        this.completion = completion; // boolean
    }

    isEqual(otherTask)
    {
        return this.title === otherTask.title &&
               this.desc === otherTask.desc &&
               this.deadline.getTime() == otherTask.deadline.getTime() &&
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