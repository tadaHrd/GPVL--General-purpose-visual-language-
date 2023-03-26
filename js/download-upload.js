function download(text) {
  const blob = new Blob([text], {type: 'text/json'});
  const url = URL.createObjectURL(blob);

  return url;
}

document.getElementById("saveFile").addEventListener("click", e => {
  e.target.href = download(
    JSON.stringify(
      Blockly.serialization.workspaces.save(workspace)
    )
  )
});

document.getElementById("loadFile").addEventListener('change', e => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    upload(JSON.parse(event.target.result));
    console.info({
      "message": "File loaded",
      "name": file.name,
      "size (chars)": file.size
    });
  };
  reader.readAsText(file);
});

const s = "loggin";
