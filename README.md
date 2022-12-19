### Attendance system with Face Recognition & Automation (AFRA)
<img src="https://user-images.githubusercontent.com/83623339/208419055-c587c6fb-da93-42bc-b284-476caa6690c0.png" height="50" width="50" />

#### Abstract
Attendance system with Face Recognition & Automation (AFRA), a cross-platform software, proposes that the system is based on face detection and recognition algorithms, which is used to automatically detect the student's face when his/her face is scanned on the system and the system is capable to mark the attendance by matching the face landmarks on the previously stored image in the database. In this proposed system, the student’s face is scanned with the system to detect and mark the face landmarks of the student.

#### Features
- A frontend interface which would be involved in
  - A form to enroll the student, course & enroller
  - A form to upload the image captured by camera
- A backend API which would be involved in
  - Getting multiple images of a face and label.
  - Extracting the features from the images and storing them in the database with the labels.
  - Checking faces when a new image is uploaded and responding with the most similar image. 
  - Training the model with the faces repetitively everytime it is scanned
  - Marking the attendance on Google sheets.

#### Tech used

##### Frontend
<p>
<img src="https://media.graphassets.com/VKHHNvEETYqZRkqgjybc" height="50" width="50" />
<img src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg" height="50" width="50" />
</p>

##### Backend
<p>
<img src="https://www.svgrepo.com/show/354119/nodejs-icon.svg" height="50" width="50" />
<img src="https://www.orafox.com/wp-content/uploads/2019/01/expressjs.png" height="50" width="50" />
<img src="https://user-images.githubusercontent.com/31125521/57224752-ad3dc080-700a-11e9-85b9-1357b9f9bca4.gif" height="50" width="50" />
<img src="https://www.tutorialsteacher.com/Content/images/home/mongodb.svg" height="50" width="50" />
</p>

### Screenshots
1. Add Course
![image7](https://user-images.githubusercontent.com/83623339/208424515-be809a44-c4e2-4a17-b4ee-8de45e7d8668.png)

2. Add Student
![image6](https://user-images.githubusercontent.com/83623339/208424591-f20f8be6-e286-4354-8071-6d5440a6c639.png)

3. Add Enroller
![image5](https://user-images.githubusercontent.com/83623339/208424634-5d4f922e-befd-40cc-b88f-13e5e83fda32.png)

4. Get Attendance Sheet
![image4](https://user-images.githubusercontent.com/83623339/208424719-192e533b-345a-4bf6-8494-1c21f05803f5.png)

5. Scan Face
![image3](https://user-images.githubusercontent.com/83623339/208424770-028eeb9b-d45e-49be-aa87-d89e7181b165.png)

6. Attendance sheet
![image2](https://user-images.githubusercontent.com/83623339/208425038-44765c85-c06f-4a7d-b466-1c5c80becfa7.png)

### Team Members

| <img src = "https://avatars.githubusercontent.com/u/83623339?v=4" width="50px"> | <img src = "https://avatars.githubusercontent.com/u/91735807?v=4" width="50px"> 
| :-----------------------------------------------------------------------------: | :-----------------------------------------------------------------------------: |
|              [Nagaraj Pandith](https://github.com/nagarajpandith/)              |  [Nidheesha T](<https://github.com/NidheeshaT/](https://github.com/rudra246)>)  |               

#### Links
- [Backend Repo](https://github.com/NidheeshaT/AFRA)
- [Project Report](https://docs.google.com/document/d/1fRreLVfbWPibFXM_lDJMvD4j8uPawRcHEK-RGNgNy7Y/edit?usp=sharing)
- [Project ppt](https://www.canva.com/design/DAFU02qwkP4/S_4Ys9bPJ_74kjJ1nXCULg/view?utm_content=DAFU02qwkP4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink)

#### Attributions
- [Building Face Recognition API with Node](https://blog.mdzulkarnine.com/building-face-recognition-api-with-nodejs-expressjs-mongodb-face-apijs)
- [Attend icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/attend)
