import bcrypt from 'bcrypt';
import supabase from '../supabaseClient.js';

const postregisterFacultyController = async (req, res) => {
    const { first_name, last_name, email, password, confirmPassword } = req.body;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@sot\.pdpu\.ac\.in$/;
    if (!emailPattern.test(email)) {
        return res.status(400).json({ message: 'Invalid email format.' });
    }

    const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!strongPasswordPattern.test(password)) {
        return res.status(400).json({ message: 'Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character.' });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match.' });
    }

    const {data: existing_email, error: email_error} =await supabase
        .from('faculty')
        .select('*')
        .eq('email', email);
    
    if(existing_email){
        return res.status(400).json({ message: 'User already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const { data:insert_data, error: insert_error } = await supabase
        .from('faculty')
        .insert([{ first_name, last_name, email, password: hashedPassword }]);

    if (insert_error) {
        return res.status(500).json({ message: 'Error registering user.' });
    }
    res.status(201).json({ message: 'User registered successfully.' });
};


const postloginFacultyController = (req, res) => {
    const { email, password } = req.body;

};

export { postregisterFacultyController, postloginFacultyController};