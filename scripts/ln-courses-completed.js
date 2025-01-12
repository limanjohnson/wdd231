const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// Select container for the courses
const coursesContainer = document.getElementById('ln-course-list');

// Iterate over courses array and create HTML for each course
courses.forEach(course => {
    // Create div for courses
    const courseDiv = document.createElement('div')
    courseDiv.classList.add('course');

    // Completed Course Class
    if (course.completed) {
        courseDiv.classList.add('course-completed')
    }

    // Div HTML content
    courseDiv.innerHTML = `
        <h3>${course.subject} ${course.number}</h3>
    `;

    // Append the course div to the container
    coursesContainer.appendChild(courseDiv);
})

// Filter Array for WDD
const wddCourses = courses.filter(course => course.subject === 'WDD');

// Filter Array for CSE
const cseCourses = courses.filter(course => course.subject === 'CSE');

// Respond to user button selection
const allButton = document.getElementById('ln-all-courses')
const cseButton = document.getElementById('ln-cse-courses')
const wddButton = document.getElementById('ln-wdd-courses')

allButton.addEventListener('click',  () => {
    coursesContainer.innerHTML = '';
    courses.forEach(course => {
        const courseDiv = document.createElement('div')
        courseDiv.classList.add('course');
        if (course.completed) {
            courseDiv.classList.add('course-completed');
        }
        courseDiv.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
        `

        coursesContainer.appendChild(courseDiv);

    });

});

cseButton.addEventListener('click', () => {
    coursesContainer.innerHTML = '';
    cseCourses.forEach(course => {
        const courseDiv = document.createElement('div')
        courseDiv.classList.add('course');
        if (course.completed) {
            courseDiv.classList.add('course-completed');
        }
        courseDiv.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
        `

        coursesContainer.appendChild(courseDiv);
    });
});

wddButton.addEventListener('click', () => {
    coursesContainer.innerHTML = '';
    wddCourses.forEach(course => {
        const courseDiv = document.createElement('div')
        courseDiv.classList.add('course');
        if (course.completed) {
            courseDiv.classList.add('course-completed');
        }
        courseDiv.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
        `

        coursesContainer.appendChild(courseDiv);
    })
})