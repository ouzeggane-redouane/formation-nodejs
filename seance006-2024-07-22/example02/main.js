const express = require('express');

const app = express();

//==================================
//Middlewares
//==================================
app.use( express.urlencoded( {extended:true} ) );
app.use( express.json() )



//==================================
//Routing
//==================================
const teacherRouter = require('./routes/teacher.route');
const stduentRouter = require('./routes/student.route');
const classroomRouter = require('./routes/classroom.route');

app.use('/teachers', teacherRouter);
app.use('/students', stduentRouter);
app.use('/classrooms', classroomRouter);


const PORT = process.env.PORT || 3500
app.listen(PORT, ()=>{
    console.log("==============================")
    console.log("Web server on port : "+PORT)
    console.log("==============================")
})