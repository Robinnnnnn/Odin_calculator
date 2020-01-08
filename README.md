# Odin_calculator

Bug for fixing later :

1. After getting solution, next input should determine what the screen content looks like. For example, If i have a solution there and press another digit number, a fresh input should be there, like starting a new problem. But if I have a solution and press divide, the solution should add the math sign and continue operation. Now, the inut goes back to the full calculation. (Patched 1/7/2019)
   Devon broke this app within 1 min and found a bug lol

2. Dividing by 0 error should only occur when pressing equal not automatically. (Patched 1/7/2019)

3. Overflow of numbers brakes box. Fixing now.
   a. Overflow is hidden. Cant see the numbers if the equation is large or answer is long.

   RL: I used overflow:auto. Its not very pretty, and brings up a vertical scrollbar unnecissarily (<---- cant spell, might be right actually idk), but for the majority of the time it wont be there. So it retains its functionality for a small portion of looks at fringe encounters. No one will ever use this but maybe ill show someone.
