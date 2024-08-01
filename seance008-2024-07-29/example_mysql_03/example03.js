const Student = require('./models/student.model.js');

async function test(){
    const student = new Student( 
        null , 
        "FR-25452314645", 
        "Omara", 
        "Familly", 
        "2005-01-12", 
        "Female"
    );
    
    await student.save();
    console.log(student.id)
}

test();