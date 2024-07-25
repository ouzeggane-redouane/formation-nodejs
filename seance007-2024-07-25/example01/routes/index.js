module.exports = (app) => {
    const teacherRouter = require("./teacher.route");
    const stduentRouter = require("./student.route");
    const classroomRouter = require("./classroom.route");

    app.get("/", (req, res)=>{
        res.locals.data="Nous sommes très très très  motivés ..."
        res.render( "index.ejs" , {name:"OUZEGGANE"});
    })

    app.use("/teachers", teacherRouter);
    app.use("/students", stduentRouter);
    app.use("/classrooms", classroomRouter);
}
