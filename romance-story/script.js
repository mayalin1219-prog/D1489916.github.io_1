// 故事資料結構，包含所有節點和結局分支
const storyData = {
    start: {
        title: "櫻花樹下的邂逅",
        text: "這是開學的第一天。春風拂過，校園裡的櫻花花瓣紛飛。你匆忙趕往教室，因為昨天熬夜看小說，快要遲到了。在走廊轉角處，你不小心撞到了一位高挑的男同學，你手裡的書本散落一地。",
        choices: [
            { text: "趕緊道歉並幫忙撿起掉落的書本", target: "node1" },
            { text: "呆呆地看著對方，不知所措", target: "node2" },
            { text: "抱怨對方走路不看路", target: "end1" }
        ]
    },
    node1: {
        title: "溫柔的學長？不，是同桌",
        text: "對方一邊蹲下幫忙撿書，一邊溫柔地笑了笑：「沒關係，我也很匆忙。我是坐在你旁邊的轉學生，林星澤。看你的制服名牌，我們應該是同班的吧？」",
        choices: [
            { text: "熱情地向他介紹校園與班級", target: "node3" },
            { text: "害羞地點點頭，迅速拿著書跑回座位", target: "node4" }
        ]
    },
    node2: {
        title: "有趣的開端",
        text: "對方似乎覺得你呆滯的模樣很有趣，輕笑了一聲：「你沒事吧？快遲到了，我們一起走吧。」他自然地幫你撿起書，遞給了你。",
        choices: [
            { text: "默默跟在他身後，不敢多說話", target: "node4" },
            { text: "鼓起勇氣和他並肩而行，詢問他的名字", target: "node3" }
        ]
    },
    node3: {
        title: "星空下的邀請",
        text: "放學後，林星澤邀請你一起參觀學校的社團。你們無意間走進了天文社，在昏暗的天象儀星空下，你們聊得很開心，彷彿認識了很久般契合。",
        choices: [
            { text: "主動問他週末要不要一起去天文館", target: "end2" },
            { text: "靜靜地享受這一刻的寧靜，沒有多說什麼", target: "node5" }
        ]
    },
    node4: {
        title: "並肩的同桌",
        text: "接下來的幾天，你們雖然是同桌，但交談並不多。直到圖書館的大掃除，你們偶然被分到了同一組。在安靜的書架間，彷彿只有你們兩個人。",
        choices: [
            { text: "主動找話題，問他最近喜歡看什麼書", target: "node5" },
            { text: "只是默默地打掃，什麼也沒說", target: "end3" }
        ]
    },
    node5: {
        title: "青春的悸動",
        text: "在不斷的互動中，你們發現彼此有著許多共同的興趣。校園舞會即將到來，一向從容的他，突然紅著臉走到你面前向你伸出手：「可以和我跳支舞嗎？」",
        choices: [
            { text: "欣然答應，並握住他的手", target: "end2" },
            { text: "害羞地說想要再考慮一下", target: "end4" }
        ]
    },

    // 結局分支
    end1: {
        title: "結局一：擦肩而過",
        text: "因為你急躁的態度，對方皺了皺眉，默默撿起書本便離開了。後來你們雖然分在同班，但失去了成為朋友的契機，成了班上最熟悉的陌生人。青春的相遇，就這樣畫上了句號。",
        isEnding: true
    },
    end2: {
        title: "結局二：星空下的約定",
        text: "你們在舞會上度過了浪漫的夜晚，在滿天星斗下，他輕聲對你訴說了心意。你們牽起了手，成為了校園裡令人羨慕的一對，開始了甜蜜的戀愛篇章！",
        isEnding: true
    },
    end3: {
        title: "結局三：平凡的日常",
        text: "你們雖然是同桌，但一直保持著安全的距離。漸漸地，你們成為了會互相點頭致意的普通朋友。那份未曾說出口的微小悸動，成為了青春裡美好的回憶。",
        isEnding: true
    },
    end4: {
        title: "結局四：未完待續",
        text: "雖然你沒有立刻答應，但他溫柔地笑了：「沒關係，我會等妳準備好。」你們的故事並沒有在此刻結束，而是以另一種更細水長流的方式，悄悄在萌芽...",
        isEnding: true
    }
};

// 畫面 DOM 元素
const storyTitleElement = document.getElementById('story-title');
const storyTextElement = document.getElementById('story-text');
const choicesAreaElement = document.getElementById('choices-area');
const cardElement = document.getElementById('game-area');

// 遊戲初始化
function startGame() {
    renderNode('start');
}

// 渲染當前故事節點
function renderNode(nodeId) {
    const node = storyData[nodeId];
    
    // 觸發漸變動畫，讓視覺上有更新的感覺
    cardElement.classList.remove('fade-transition');
    void cardElement.offsetWidth; // 強制重繪 (Reflow)，重新觸發動畫
    cardElement.classList.add('fade-transition');

    // 根據是否為結局來渲染不同結構
    if (node.isEnding) {
        // 結局畫面
        storyTitleElement.innerHTML = `<span class="ending-title">${node.title}</span>`;
        storyTextElement.innerHTML = `<p>${node.text}</p>`;
        
        choicesAreaElement.innerHTML = `
            <button class="choice-btn" onclick="startGame()">重新開始故事</button>
        `;
    } else {
        // 一般故事節點畫面
        storyTitleElement.textContent = node.title;
        storyTextElement.innerHTML = `<p>${node.text}</p>`;
        
        // 動態生成選項按鈕
        choicesAreaElement.innerHTML = '';
        node.choices.forEach(choice => {
            const button = document.createElement('button');
            button.className = 'choice-btn';
            button.textContent = choice.text;
            button.onclick = () => renderNode(choice.target);
            choicesAreaElement.appendChild(button);
        });
    }
}

// 生成背景飄落的櫻花花瓣特效 (純 JS + CSS 動畫)
function createPetals() {
    const numPetals = 15; // 花瓣數量
    for (let i = 0; i < numPetals; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        
        // 取得隨機屬性讓花瓣下落更自然
        const left = Math.random() * 100 + 'vw';
        const animationDuration = Math.random() * 5 + 6 + 's'; // 6s 到 11s 的降落時間
        const animationDelay = Math.random() * 10 + 's';
        const size = Math.random() * 8 + 8 + 'px'; // 8px 到 16px 的大小
        
        petal.style.left = left;
        petal.style.width = size;
        petal.style.height = size;
        petal.style.animationDuration = animationDuration;
        petal.style.animationDelay = animationDelay;
        
        document.body.appendChild(petal);
    }
}

// 當網頁載入完成後，初始化花瓣特效
window.onload = createPetals;
