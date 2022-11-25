import assignedToValidation from "./assignedToValidation.js";
import descriptionValidation from "./descriptionValidation.js";
import nameValidation from "./nameValidation.js";
import dueDateValidation from "./dueDateValidation.js";

function validateForm(){
    if (assignedToValidation() && descriptionValidation() && nameValidation() && dueDateValidation()){
        return true
    }
}

export default validateForm