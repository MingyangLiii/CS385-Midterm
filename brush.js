let selectedItems = new Set();
let startX, startY, selectionBox;
let isBrushMode = false;
let commandKeyTimer = null;


document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("selected");
        if (item.classList.contains("selected")) {
            selectedItems.add(item);
        } else {
            selectedItems.delete(item);
        }
    });
});

document.getElementById("move-btn").addEventListener("click", () => {
    const movedList = document.getElementById("moved-list");
    selectedItems.forEach(item => {
        movedList.appendChild(item);
        item.classList.remove("selected");
    });
    selectedItems.clear();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Meta" || event.key === "Command") {
        commandKeyTimer = setTimeout(() => {
            isBrushMode = !isBrushMode;
            // alert(`Brush mode ${isBrushMode ? "enabled" : "disabled"}`)
            document.getElementById("current-mode").innerText = `${isBrushMode ? "Brush Mode Enabled" : "Click Mode"}`;
            commandKeyTimer = null;
        }, 750);
    }
});

document.addEventListener("keyup", (event) => {
    if (event.key === "Meta" || event.key === "Command") {
        if (commandKeyTimer) {
            clearTimeout(commandKeyTimer); 
            commandKeyTimer = null;
        }
    }
});

document.getElementById("left").addEventListener("mousedown", (event) => {
    if (!isBrushMode) return;
    event.preventDefault();
    startX = event.clientX-30;
    startY = event.clientY-30;
    selectionBox = document.createElement("div");
    selectionBox.classList.add("brush-box");
    document.getElementById("left").appendChild(selectionBox);
    selectionBox.style.left = `${startX}px`;
    selectionBox.style.top = `${startY}px`;
});

document.addEventListener("mousemove", (event) => {
    if (!isBrushMode) return;
    if (!selectionBox) return;
    // event.preventDefault();
    let width = event.clientX-startX-30;
    let height = event.clientY-startY-30;
    selectionBox.style.width = `${Math.abs(width)}px`;
    selectionBox.style.height = `${Math.abs(height)}px`;
    selectionBox.style.left = `${Math.min(startX, event.clientX)}px`;
    selectionBox.style.top = `${Math.min(startY, event.clientY)}px`;
});

document.addEventListener("mouseup", () => {
    if (!isBrushMode) return;
    if (selectionBox) {
        const brushbox = selectionBox.getBoundingClientRect();

        const itemsInBrushBox = [];
        let allSelected = true;
        let hasUnselected = false;
        document.querySelectorAll(".item").forEach(item =>{
            const itembox = item.getBoundingClientRect();
            if ((itembox.left > brushbox.right || itembox.right > brushbox.left) && (itembox.top < brushbox.bottom || itembox.bottom < brushbox.top)) {
                itemsInBrushBox.push(item);
                if (!item.classList.contains("selected")) {
                    allSelected = false;
                }else{
                    hasUnselected = true;
                }
                if (allSelected) {
                    itemsInBrushBox.forEach(item => {
                        item.classList.remove("selected");
                        selectedItems.delete(item);
                    });
                } else {
                    itemsInBrushBox.forEach(item => {
                        item.classList.add("selected");
                        selectedItems.add(item);
                    });
                }
            }
        })

        document.getElementById("left").removeChild(selectionBox);
        selectionBox = null;
    }
});

