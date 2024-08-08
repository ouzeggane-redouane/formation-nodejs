function handleSubmit(e){
    e.preventDefault();

    const txtUsername = document.getElementById("username");
    const txtPassword = document.getElementById("password");

    const username = txtUsername.value;
    const password = txtPassword.value;

    if (username == ""){
      document.getElementById("error").innerHTML  = '<div style="margin:5px; padding:5px; font-weight:900; background:red; color:white">Veuillez remplir le nom d\'utilisateur !!!</div>' 
      txtUsername.focus();

      return;
    }

    if (password == ""){
      document.getElementById("error").innerHTML  = '<div style="margin:5px; padding:5px; font-weight:900; background:red; color:white">Veuillez remplir le mot de passe !!!</div>' 
      txtUsername.focus();

      return;
    }

    document.querySelector("#form").submit();
  }

  document.querySelector("#form").addEventListener("submit", (e)=>{
    handleSubmit(e);
  })