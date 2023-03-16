# Description 

## Count the Islands

Implement an algorithm which analyzes a two-color image and determines how many isolated areas of a single color the image contains.
I
## Islands

An "island" is a set of adjacent pixels of one color (1) which is surrounded by pixels of a different color (0). Pixels are considered adjacent if their coordinates differ by no more than 1 on the X or Y axis.

Below you can see an example with 2 islands:

    on the left in the form of a matrix of 1's and 0's
    on the right in an equivalent stringified form using "X" and "~" characters for better readability

[
  [0,0,0,0,0,0,0,0,0,0],          "~~~~~~~~~~"
  [0,0,1,1,0,0,0,0,0,0],          "~~XX~~~~~~"
  [0,0,1,1,0,0,0,0,0,0],          "~~XX~~~~~~"
  [0,0,0,0,0,0,0,0,1,0],          "~~~~~~~~X~"
  [0,0,0,0,0,1,1,1,0,0],          "~~~~~XXX~~"
  [0,0,0,0,0,0,0,0,0,0],          "~~~~~~~~~~"
]

