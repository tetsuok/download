function handleClick() {
  const str = "Hello, 世界!";
  const blob = new Blob([str], {type : "text/plain;charset=UTF-8"});
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
