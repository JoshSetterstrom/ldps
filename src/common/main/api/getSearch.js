export default function getSearch(string, listToRender, profileData) {

  /**Iterates through profileData data to filter profileData based on user input */
  return listToRender.reduce((result, listItem) => {
    listItem = listItem.toLowerCase()
    
    try {
      result[listItem] = 
        profileData[listItem].filter(list => {
          return list.some(item => {
            if (!item.data) return ""
            
            let cleanItem   = item.data.toString().toLowerCase()
            let cleanString = string.target.value.toLowerCase()
    
            if (cleanItem.includes(cleanString)) return true
            else return false
          })
        })
  
      return result
    }
    catch {return result}
  }, {})
}