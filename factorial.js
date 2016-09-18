average=0
grayscale_img=img
for i in range(len(img)):
    for j in range(len(img[i])):
        for k in range(len(img[i][j])):
        average += img[i][j][k]
        average=/3
        grayscale_img[i][j][k]=average
        plt.imshow(grayscale_img)