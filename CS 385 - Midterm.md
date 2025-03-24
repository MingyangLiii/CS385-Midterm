# CS 385 - Midterm

### 1. Pointing Technique in Multiple Items Selection

![CB20AC07-70E4-49B9-9BCE-F4B135AF5380.jpeg](/Users/mingyangli/Pictures/Photos%20Library.photoslibrary/originals/C/CB20AC07-70E4-49B9-9BCE-F4B135AF5380.jpeg)

![9A8CBB40-BCC4-46E4-9723-BBC060E54B8C.jpeg](/Users/mingyangli/Pictures/Photos%20Library.photoslibrary/originals/9/9A8CBB40-BCC4-46E4-9723-BBC060E54B8C.jpeg)

In the scenario in which people use traditional mouse-based or touchpad-based pointing interaction to select multiple items, people replies on a physical mouse or touchpad to control a cursor on the screen, translating the hand movements into precise cursor movement on the screen.

The mechanism behind this pointing interaction technique is that mouse or touchpad detects the movement by optical or mechanical sensors and translates this into cursor movement. Buttons enables clicking, dragging by detecting mouse-up, mouse-move, and mouse-down. It works for many tasks, however, when it meets some cases which need multiple clicks at different locations with no mattering the clicking sequence, it becomes inefficient. 

In the scenario above, user need to click multiple items one-by-one to select all of them. This takes 6 moves and 6 clicks operations. This is really annoying if the items need to be selected become a large number.



---

### 2. Brush Mode

When the command is clicked and hold for 0.75 second, the mode will change to brush mode, where user can select multiple items by one click and drag operation. User can do the same operation to change back to Click Mode.

The brush will detect user's mouse-down, mouse-move, and mouse-up, to create a rectangular area. Every items get in touch with this area will be selected.

There will be a brush box marked by dashed line border to give realtime feedback to user.



---

### 3. Demo Video

Separate Video File.



---

### 4. Test Records

Separate MarkDown File.



---

### 5. Test Analysis

Traditional pointing technique often require repetitive mouse actions, leading to inefficiency and user fatigue. The brush tool is introduced to reduce the number of clicks for multiple items selection. While traditional method force users to click individually on each item, a well-designed brush allows for fluid, drag-based selection. User can select all items they want through a single click and drag. 



The tested brush tool improves efficiency by enabling users to select multiple items in a single motion rather than dicrete clicks. In continuous selection tasks - such as selecting spatially continuous items - the brush reduced completion time by 15.3%. However, in discrete and batch selections, where targets are scattered, the brush show no improvement in time completion. This suggests that while brush mode reduces operation counts, it may take longer time to complete the task.



User think that Canva is the preferred design tool, mentioning its extensive template library as a key advantage. This preference highlights the importance of ready-to-use resources in creative workflows. Interestingly, the participant also expressed a desire for Apple Pencil support, indicating that touchpad and mouse may be inefficient in detailed designing. These insights suggest that users value tools that combine efficiency (like pre-made templates) with Conciseness (like accurate device input control). 



 The test result reveals that task type significantly influences brush effectiveness. Continuous selections benefit most from brush functionality, while discrete and batch selections may still rely on traditional input methods for optimal speed. Additionally, user preferences emphasize the need for adaptable tool which can toggle between brush and click-based selection depending on context. The slight slowdown in batch tasks suggests that brushes should either adapt dynamically or allow quick switching to avoid workflow interruptions.



Since current brush mode is activated through clicking and holding command for 0.75 second. I the future improvement, I will consider change the activation approach to clicking and continuously holding the shift. This activation approach aligns with user's habits of typing capital letter (which is also clicking the continuously holding shift while click other letters). 


