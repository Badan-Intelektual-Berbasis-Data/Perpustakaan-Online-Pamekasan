export default function FormValidation(form) {
  const formData = new FormData(form);

  const data = new URLSearchParams();

  for (let [key, value] of formData.entries()) {
    if (key == "confirm_password") {
      // Check password is same or not
      if (value != data.get("password")) {        
        alert("Password tidak sama");

        return []
      }
      continue;
    }

    if (key == "nik") {
      console.log(value);
      
      if (value.length != 16) {
        alert("NIK tidak valid")
        return []
      }
    }


    data.append(key, value);
  }

  return data;
}
