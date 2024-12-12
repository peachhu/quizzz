let count = 0;
function checkAnswer1(answer){
    const result = document.getElementById('result');
   
    if(answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
        count = 1;
      
    }else{
        result.textContent = " Incorrect! Try again.";
        result.style.color = 'red';  
         }
}
function checkAnswer2(answer){
    const result = document.getElementById('result2');
    const result3 = document.getElementById('result3');
    if(answer ==='c') {
        result.textContent = "ถูกต้องจ้าาา ตัวมัมเว่อออ";
        result.style.color = 'green';
        count++;
        
    }else{
        result.textContent = "โอ้โหหห โนๆๆๆๆบ่ถูกเด้อหล่าเอ้ยยย";
        result.style.color = 'red';  
         }
  
    result3.textContent = "คุณได้ทั้งหมด " + count + " คะแนน ";
         count = 0;
}
