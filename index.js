function calculateAge(dob){
    const birthDate = new Date(dob);
    const today = new Date()
    let age = today.getFullYear()-birthDate.getFullYear();
    const monthDiff = today.getMonth()-birthDate.getMonth();
    if(monthDiff<0 || (monthDiff==0 & today.getDate()<birthDate.getDate())){
        age--;
    }
    return age;
    
}
document.getElementById("dob").addEventListener("input", function (){
    const dob = this.value;
    const age = calculateAge(dob);
    if(age<18 || age > 55){
        alert("age must be between 18 to 55")
        this.value = "";
    }
})

function displaydata(){
    const storeData = JSON.parse(localStorage.getItem("formdata"));
    if(storeData){
        const tablebody = document.querySelector("#data-table tbody");
        tablebody.innerHTML=`
            <tr>
                <td>${storeData.name}</td>
                <td>${storeData.email}</td>
                <td>${storeData.password}</td>
                <td>${storeData.dob}</td>
                <td>${storeData.acceptedTerms}</td>
            </tr>
        `
    }
}

document.getElementById("registrationForm").addEventListener("submit", (e)=>{
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const acceptedTerms = document.getElementById("terms").checked;

    // Save form data to localStorage
    const formData = {
        name,
        email,
        password,
        dob,
        acceptedTerms
    };

    localStorage.setItem("formdata", JSON.stringify(formData));
    displaydata();
});