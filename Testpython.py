# install WSL, Ubuntu, optional(VcXrc)
# sudo apt-get install python3-pip python-is-python3
# sudo apt-get install build-essential cmake pkg-config
# sudo apt-get install libx11-dev libatlas-base-dev
# sudo apt-get install libgtk-3-dev libboost-python-dev
# pip3 install tensorflow keras opencv-contrib-python cvlib dlib face-recognition python-osc

#Remember to open comfig Xlaunch
import cv2
image = cv2.imread("/home/georgia/workspace/python/test01.png" )
gray_image = cv2.cvtColor(image,cv2.COLOR_BGR2GRAY)

# cv2.startWindowThread()

cv2.imshow("OpenCV logo", image)
cv2.imshow("OpenCV logo gray format", gray_image)
cv2.waitKey(0)

cv2.destroyAllWindows()