const Student = require('./models/student.model')


async function test(){
    let data = await Student.getAll();
    console.log(data);
}

test();

