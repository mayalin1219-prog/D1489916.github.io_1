const storyData = {
    start: {
        text: "開學第一天，你因為睡過頭而在走廊上狂奔，在轉角處不小心撞上了一個人...",
        choices: [
            { text: "霸道總裁型學長：「喂，走路不看路啊？」", next: "senior" },
            { text: "溫柔青梅竹馬：「哎呀！沒事吧？有沒有受傷？」", next: "friend" },
            { text: "神秘轉學生：（一句話都沒說，只是冷冷地看著你）", next: "transfer" }
        ]
    },
    senior: {
        text: "學長一把將你拉起來，拍了拍你身上的灰塵。「作為撞倒我的補償，放學後到學生會室來幫忙。」",
        choices: [
            { text: "乖乖答應，放學後去幫忙", next: "studentCouncil" },
            { text: "覺得莫名其妙，放學直接溜回家", next: "ending_miss" }
        ]
    },
    friend: {
        text: "青梅竹馬笑著撿起你掉在地上的書包。「還是老樣子這麼冒失呢，今天中午一起吃飯吧？」",
        choices: [
            { text: "好啊！我們去學校頂樓吃！", next: "roof" },
            { text: "不了，我今天想去福利社看看有什麼好吃的", next: "cafeteria" }
        ]
    },
    transfer: {
        text: "轉學生撿起你的學生證，看了一眼後默默還給你，轉身就走。",
        choices: [
            { text: "追上去大聲向他道謝", next: "chase" },
            { text: "呆呆地站在原地看著他的背影", next: "ending_crush" }
        ]
    },
    studentCouncil: {
        text: "學生會室裡只有學長一個人，他遞給你一疊滿滿的資料。「處理完才能走哦。」",
        choices: [
            { text: "努力處理完所有資料！", next: "ending_sweet" },
            { text: "實在太累了，做到一半趴在桌上睡著了", next: "ending_coat" }
        ]
    },
    roof: {
        text: "在頂樓，微風輕拂。青梅竹馬拿出了你最喜歡的菜。「其實...我一直有句話想對你說...」",
        choices: [
            { text: "心跳加速，靜靜地聽他說", next: "ending_confess" },
            { text: "（肚子突然咕嚕叫）搶先說：「這便當看起來太好吃了！」", next: "friendzone" }
        ]
    },
    cafeteria: {
        text: "在福利社，你又遇到了轉學生，他正盯著架上最後一個炒麵麵包發愁。",
        choices: [
            { text: "發揮同學愛，掏錢幫他買下來！", next: "ending_bread" },
            { text: "不管他，自己以百米衝刺速度買下來吃掉", next: "ending_foodie" }
        ]
    },
    chase: {
        text: "你氣喘吁吁地追上轉學生，向他道謝。他微微一愣，嘴角勾起一抹極淺的微笑：「...下次小心點。」",
        choices: [
            { text: "忍不住脫口而出：「你笑起來很好看呢！」", next: "ending_smile" },
            { text: "害羞地點點頭：「喔...好的。」", next: "ending_crush" }
        ]
    },
    friendzone: {
        text: "青梅竹馬無奈地笑了笑，伸手揉了揉你的頭髮：「你這傢伙，腦子裡就只有吃啊。」",
        choices: [
            { text: "開玩笑的啦，你剛剛想說什麼？", next: "ending_confess" },
            { text: "對啊！吃飯皇帝大啊！", next: "ending_friendzone" }
        ]
    }
};

const endings = {
    ending_miss: {
        title: "擦肩而過",
        desc: "你選擇了直接回家。隔天在校園裡再次遇到學長時，他彷彿不認識你一般。你們的故事還沒開始就結束了。"
    },
    ending_crush: {
        title: "無疾而終的暗戀",
        desc: "你選擇了沉默。之後的日子裡，你總會在校園的角落默默關注著轉學生，但你們再也沒有交集。"
    },
    ending_sweet: {
        title: "甜蜜的負擔",
        desc: "你努力幫忙處理完了資料。學長滿意地笑了笑：「辛苦了，作為獎勵，我請你吃冰並送你回家吧。」"
    },
    ending_coat: {
        title: "意外的溫柔",
        desc: "你醒來時發現身上披著學長的外套，而他正在一旁安靜地看書。夕陽灑在你們身上，氣氛說不出的溫馨。"
    },
    ending_confess: {
        title: "水到渠成的愛戀",
        desc: "「我喜歡你，很久以前就喜歡了。」青梅竹馬紅著臉說。你笑著點頭，兩段單向的暗戀終於交匯成一條線。"
    },
    ending_bread: {
        title: "炒麵麵包的羈絆",
        desc: "你買下麵包遞給他。從那天起，你們成了經常一起分享美食的「飯友」，而這份關係似乎正朝著更特別的方向發展..."
    },
    ending_foodie: {
        title: "吃貨的悲哀",
        desc: "你一口咬下炒麵麵包，感受到轉學生幽怨的目光。雖然麵包很好吃，但你似乎失去了一段可能展開的戀情。"
    },
    ending_smile: {
        title: "融化的冰山",
        desc: "聽到你的讚美，轉學生的耳根瞬間紅了。那抹微笑成了你們專屬的秘密，他的冰山外表從此只對你融化。"
    },
    ending_friendzone: {
        title: "永遠的青梅竹馬",
        desc: "你們開心地吃完了午餐。或許現在這樣無話不談的關係，就是你們之間最美好、最舒服的狀態。"
    }
};

// DOM 元素
const homeScreen = document.getElementById('home-screen');
const storyScreen = document.getElementById('story-screen');
const endingScreen = document.getElementById('ending-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const storyText = document.getElementById('story-text');
const choicesContainer = document.getElementById('choices-container');
const endingTitle = document.getElementById('ending-title');
const endingDesc = document.getElementById('ending-desc');
const canvas = document.getElementById('sakura-canvas');
const ctx = canvas.getContext('2d');

// 遊戲狀態
let currentNode = 'start';
let sakuras = [];
let animationFrameId;

// 綁定事件
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', returnToHome);

function startGame() {
    homeScreen.classList.remove('active');
    storyScreen.classList.add('active');
    currentNode = 'start';
    renderNode();
}

function returnToHome() {
    endingScreen.classList.remove('active');
    homeScreen.classList.add('active');
    cancelAnimationFrame(animationFrameId);
}

function renderNode() {
    const node = storyData[currentNode];
    
    choicesContainer.innerHTML = '';
    
    // 簡單的漸現動畫效果
    storyScreen.style.animation = 'none';
    storyScreen.offsetHeight; /* 觸發重繪 */
    storyScreen.style.animation = 'fadeIn 0.5s ease-in-out';

    storyText.textContent = node.text;
    
    // 渲染選項按鈕
    node.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'btn choice-btn';
        btn.textContent = choice.text;
        btn.addEventListener('click', () => makeChoice(choice.next));
        choicesContainer.appendChild(btn);
    });
}

function makeChoice(nextId) {
    if (nextId.startsWith('ending_')) {
        showEnding(nextId);
    } else {
        currentNode = nextId;
        renderNode();
    }
}

function showEnding(endingId) {
    storyScreen.classList.remove('active');
    endingScreen.classList.add('active');
    
    const ending = endings[endingId];
    endingTitle.textContent = ending.title;
    endingDesc.textContent = ending.desc;
    
    // 開啟櫻花飄落動畫
    startSakura();
}

// === 畫布櫻花動畫 === 
function startSakura() {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    sakuras = [];
    // 產生櫻花花瓣
    for (let i = 0; i < 25; i++) {
        sakuras.push(new Sakura());
    }
    
    animateSakura();
}

function resizeCanvas() {
    // 根據父元素自適應大小
    const container = canvas.parentElement;
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
}

class Sakura {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.size = Math.random() * 8 + 6;
        this.speedY = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 2 - 1;
        this.angle = Math.random() * Math.PI * 2;
        this.spin = Math.random() * 0.05 - 0.025;
    }
    
    update() {
        this.y += this.speedY;
        this.x += this.speedX + Math.sin(this.y * 0.015);
        this.angle += this.spin;
        
        // 若超出底部則回到上方
        if (this.y > canvas.height + 20) {
            this.y = -20;
            this.x = Math.random() * canvas.width;
        }
    }
    
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        
        ctx.beginPath();
        // 簡單的水滴狀櫻花花瓣
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(this.size, -this.size, this.size*1.5, this.size, 0, this.size*1.2);
        ctx.bezierCurveTo(-this.size*1.5, this.size, -this.size, -this.size, 0, 0);
        
        ctx.fillStyle = 'rgba(255, 183, 197, 0.85)';
        ctx.fill();
        ctx.restore();
    }
}

function animateSakura() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    sakuras.forEach(sakura => {
        sakura.update();
        sakura.draw();
    });
    
    animationFrameId = requestAnimationFrame(animateSakura);
}
