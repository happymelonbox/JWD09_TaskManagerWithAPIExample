function compareDate(today, comparison){
    if (today[2] >= comparison[0]){
        if (today[1] >= comparison[1]){
            if (today[0] >= comparison[2]){
                return true
            }
        }
    }
}

export default compareDate