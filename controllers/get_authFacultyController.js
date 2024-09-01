const getregisterFacultyController = (req, res) => {
    res.render('./pages/faculty/register',{ title: 'Sign Up'})
};

const getloginFacultyController = (req, res) => {
    res.render('./pages/faculty/login',{ title: 'Log in'})
};


export {getregisterFacultyController, getloginFacultyController};