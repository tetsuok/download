function handleClick() {
  const str = "おはようございます";
  const blob = new Blob([str], {type : "text/plain"});
  const url = URL.createObjectURL(blob);
  let a = document.createElement("a");
  a.download = "test.txt";
  a.href = url;
  a.click();

  setTimeout(() => {
    a.remove();
    URL.revokeObjectURL(url);
  }, 100);
}
