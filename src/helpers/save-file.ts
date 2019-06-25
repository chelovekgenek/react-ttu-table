export const saveFile = (filename: string, content: object) => {
  let contentType = "application/json;charset=utf-8;"
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    var blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(content)))], { type: contentType })
    navigator.msSaveOrOpenBlob(blob, filename)
  } else {
    var a = document.createElement("a")
    a.download = filename
    a.href = "data:" + contentType + "," + encodeURIComponent(JSON.stringify(content))
    a.target = "_blank"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
}
