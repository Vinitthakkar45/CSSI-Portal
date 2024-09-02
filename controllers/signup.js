async function signUp(email, password) {
    const { user, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
  
    if (error) {
      console.error('Error signing up:', error.message)
    } else {
      console.log('Sign-up successful, verification email sent:', user)
    }
}

export {signUp};