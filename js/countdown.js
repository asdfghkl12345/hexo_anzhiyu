let CountdownTimer=(()=>{let c={targetDate:"2026-02-17",targetName:"春节",units:{day:{text:"今日",divider:1,unit:"小时"},week:{text:"本周",divider:24,unit:"天"},month:{text:"本月",divider:24,unit:"天"},year:{text:"本年",divider:24,unit:"天"}}};function t(){var e,t,n,a,i,r=["eventName","eventDate","daysUntil","countRight"].map(e=>document.getElementById(e));r.some(e=>!e)||([r,e,t,n]=r,a=Object.keys(c.units).reduce((e,t)=>({...e,[t]:(t=>{var e=new Date;let n=new Date(e.setHours(0,0,0,0)),a=new Date(e.setHours(23,59,59,999));if("day"===t){var i=(new Date).getHours(),r=24-i;let e=i/24*100;return{name:c.units[t].text,remaining:r,percentage:e.toFixed(2),unit:c.units[t].unit}}({week:()=>{var e=n.getDay(),e=0===e?-6:1-e;n.setDate(n.getDate()+e),a.setDate(n.getDate()+6)},month:()=>{n.setDate(1),a.setMonth(a.getMonth()+1,0)},year:()=>{n.setMonth(0,1),a.setMonth(11,31)}})[t]?.(),i="day"===t?24:Math.floor((a-n)/864e5)+1;let o=(r=Math.floor((e-n)/(36e5*c.units[t].divider)))/i*100;return{name:c.units[t].text,remaining:i-r,percentage:o.toFixed(2),unit:c.units[t].unit}})(t)}),{}),i=Math.round((new Date(c.targetDate)-(new Date).setHours(0,0,0,0))/864e5),r.textContent=c.targetName,e.textContent=c.targetDate,t.textContent=i,n.innerHTML=Object.entries(a).map(([,e])=>`
                <div class="cd-count-item">
                    <div class="cd-item-name">${e.name}</div>
                    <div class="cd-item-progress">
                        <div class="cd-progress-bar" style="width: ${e.percentage}%; opacity: ${e.percentage/100}"></div>
                        <span class="cd-percentage ${46<=e.percentage?"cd-many":""}">${e.percentage}%</span>
                        <span class="cd-remaining ${60<=e.percentage?"cd-many":""}">
                            <span class="cd-tip">还剩</span>${e.remaining}<span class="cd-tip">${e.unit}</span>
                        </span>
                    </div>
                </div>
            `).join(""))}let n,a=()=>{var e;(e=document.createElement("style")).textContent=`
            .card-countdown .item-content {
                display: flex;
            }
            .cd-count-left {
                position: relative;
                display: flex;
                flex-direction: column;
                margin-right: 0.8rem;
                line-height: 1.5;
                align-items: center;
                justify-content: center;
            }
            .cd-count-left .cd-text {
                font-size: 14px;
            }
            .cd-count-left .cd-name {
                font-weight: bold;
                font-size: 18px;
            }
            .cd-count-left .cd-time {
                font-size: 30px;
                font-weight: bold;
                color: var(--anzhiyu-main);
            }
            .cd-count-left .cd-date {
                font-size: 12px;
                opacity: 0.6;
            }
            .cd-count-left::after {
                content: "";
                position: absolute;
                right: -0.8rem;
                width: 2px;
                height: 80%;
                background-color: var(--anzhiyu-main);
                opacity: 0.5;
            }
            .cd-count-right {
                flex: 1;
                margin-left: .8rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            .cd-count-item {
                display: flex;
                flex-direction: row;
                align-items: center;
                height: 24px;
            }
            .cd-item-name {
                font-size: 14px;
                margin-right: 0.8rem;
                white-space: nowrap;
            }
            .cd-item-progress {
                position: relative;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                height: 100%;
                width: 100%;
                border-radius: 8px;
                background-color: var(--anzhiyu-background);
                overflow: hidden;
            }
            .cd-progress-bar {
                height: 100%;
                border-radius: 8px;
                background-color: var(--anzhiyu-main);
            }
            .cd-percentage,
            .cd-remaining {
                position: absolute;
                font-size: 12px;
                margin: 0 6px;
                transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
            }
            .cd-many {
                color: #fff;
            }
            .cd-remaining {
                opacity: 0;
                transform: translateX(10px);
            }
            .card-countdown .item-content:hover .cd-remaining {
                transform: translateX(0);
                opacity: 1;
            }
            .card-countdown .item-content:hover .cd-percentage {
                transform: translateX(-10px);
                opacity: 0;
            }
        `,document.head.appendChild(e),t(),n=setInterval(t,6e5)};return["pjax:complete","DOMContentLoaded"].forEach(e=>document.addEventListener(e,a)),document.addEventListener("pjax:send",()=>n&&clearInterval(n)),{start:a,stop:()=>n&&clearInterval(n)}})();