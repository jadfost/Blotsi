$(document).ready(function() {

    // CONTROL DE USUARIO
    let user = getLS("loggedUser")

    try {
        if (user.admin != true) {
            alert("No puede ingresar a este sitio")
            window.location.href = "index.html";
        }

    } catch (error) {
        alert("No puede ingresar a este sitio")
        window.location.href = "index.html";
    }

    refreshStatistics()

});


function refreshStatistics() {

    // Cantidad de cursos
    let NCourses = (getLS("courses")).length
    $("#CoursesStats").html(NCourses)

    // Usuarios
    let TotalUsers = getLS("TotalUsers")
    $("#UsersStats").html(TotalUsers)

    // Ingresos
    let IncomeStats = getLS("Income") || 0
    $("#IncomeStats").html(IncomeStats)

    // Visitantes (Números inventados)
    let Visitor = parseInt(Math.random() * (20000 - 100) + 100)
    $("#VisitorStats").html(Visitor)


}


function addCourse(form, e) {
    e.preventDefault()

    // Obtiene los datos anteriores
    let courses = getLS("courses") || []

    // Obtiene los datos del formulario
    elements = $(`#${form} :input`)

    // Verifica si es una modificación o un alta
    let index = elements[elements.length - 1].value

    if (index) {
        // Modificación

        for (const key of elements) {
            key_ad = key.id.toLowerCase().split("").splice(3, 100).join("")
            courses[index][key_ad] = key.value
        }

    } else {
        // Alta

        courses.push(new Course(
            elements[0].value,
            elements[1].value,
            elements[2].value,
            elements[3].value,
            elements[4].value,
            elements[5].value,
            elements[6].value,
            elements[7].value))
    }

    // Agrega el curso adicional
    courses.push({
        name: "Photoshop",
        description: "Si hay un programa esencial por su versatilidad y utilidad en múltiples profesiones y aplicaciones, ése es Photoshop. Siendo el software profesional standard de edición, composición, pintura y retoque de la imagen digital, es tan imprescindible para fotógrafos, artistas digitales y diseñadores como para cualquier aficionado que desee realizar proyectos tan variados como un folleto, una presentación o un calendario familiar.",
        category: "Diseño",
        price: 20000,
        vacancies: 0,
        teacher: 20353630017,
        conditions: "Sin requisitos previos",
        ico: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/512px-Adobe_Photoshop_CC_icon.svg.png",
    });

    // Agrega el segundo curso adicional
    courses.push({
        name: "Javascript II",
        description: "Si hay un programa esencial por su versatilidad y utilidad en múltiples profesiones y aplicaciones, ése es Photoshop. Siendo el software profesional standard de edición, composición, pintura y retoque de la imagen digital, es tan imprescindible para fotógrafos, artistas digitales y diseñadores como para cualquier aficionado que desee realizar proyectos tan variados como un folleto, una presentación o un calendario familiar.",
        category: "Programación",
        price: 10000,
        vacancies: 30,
        teacher: 20353630017,
        conditions: "Haber cursado Javascript I o realizar examen",
        ico: "https://iconape.com/wp-content/files/vr/353405/svg/javascript-js-seeklogo.com.svg",
    });

     // Agrega el terce curso adicional
     courses.push({
        name: "Node.js",
        description: "NodeJS, es básicamente un framework para implementar operaciones de entrada y salida. Está basado en eventos, streams y construido sobre del motor de Javascript V8, que es con el que funciona el Javascript de Google Chrome. NodeJS se programa del lado del servidor, lo que indica que los procesos para el desarrollo de software en 'Node' se realizan de una manera muy diferente que los de Javascript del lado del cliente. Basándose en los conceptos de la programación asíncrona y la programación orientada a eventos, con la particularidad que los eventos en esta plataforma son orientados a cosas que suceden del lado del servidor y no del lado del cliente como los que conocemos anteriormente en Javascript 'común'. Express es un microframework basado en Node JS que nos permitirá desarrollar una API REST. Mediante Node JS + express + Mongo DB desarrollaremos una api rest realizando una operación de tipo CRUD de ejemplo (Create, read, update, delete)",
        category: "Programación",
        price: 20000,
        vacancies: 20,
        teacher: 20353630017,
        conditions: "Haber cusado Javascript II o realizar examen",
        ico: "https://iconape.com/wp-content/png_logo_vector/node-js.png",
    });

    // Agrega el cuarto curso adicional
    courses.push({
        name: "Publicidad en redes",
        description: "A medida que Internet evoluciona y gana en rapidez y potencia, y a su vez las computadoras y dispositivos móviles cada vez poseen mayores presetaciones, las redes socilales de imágen y video van ganando lugar y generando nuevas herramientas de confección y edición de contenido. La red social de imágenes lider actualmente es Instagram, que ha desarrollado Instagram Ads, herramienta que nos permitirá realizar campañas de marketing digital eficientes, aprovechando la gran cantidad de usuarios. La red social de video lider actualmente es Youtube, que pertenece a Google Inc. En este momento Youtube cuenta con varias posibilidades de desarrollo como herramienta de marketing digital ( videomarketing), que también analizaremos y practicaremos en este curso.",
        category: "Marketing",
        price: 18000,
        vacancies: 1,
        teacher: 20353630017,
        conditions: "Conocimientos generales sobre internet",
        ico: "https://iconape.com/wp-content/files/hl/203107/png/A4_Publicidade-logo.png"
    });

    // Agrega el curso adicional
    courses.push({
        name: "Photoshop",
        description: "Si hay un programa esencial por su versatilidad y utilidad en múltiples profesiones y aplicaciones, ése es Photoshop. Siendo el software profesional standard de edición, composición, pintura y retoque de la imagen digital, es tan imprescindible para fotógrafos, artistas digitales y diseñadores como para cualquier aficionado que desee realizar proyectos tan variados como un folleto, una presentación o un calendario familiar.",
        category: "Diseño",
        price: 20000,
        vacancies: 0,
        teacher: 20353630017,
        conditions: "Sin requisitos previos",
        ico: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/512px-Adobe_Photoshop_CC_icon.svg.png",
    });

    // Agrega el segundo curso adicional
    courses.push({
        name: "Javascript II",
        description: "Si hay un programa esencial por su versatilidad y utilidad en múltiples profesiones y aplicaciones, ése es Photoshop. Siendo el software profesional standard de edición, composición, pintura y retoque de la imagen digital, es tan imprescindible para fotógrafos, artistas digitales y diseñadores como para cualquier aficionado que desee realizar proyectos tan variados como un folleto, una presentación o un calendario familiar.",
        category: "Programación",
        price: 10000,
        vacancies: 30,
        teacher: 20353630017,
        conditions: "Haber cursado Javascript I o realizar examen",
        ico: "https://iconape.com/wp-content/files/vr/353405/svg/javascript-js-seeklogo.com.svg",
    });

    // Agrega el terce curso adicional
    courses.push({
        name: "Node.js",
        description: "NodeJS, es básicamente un framework para implementar operaciones de entrada y salida. Está basado en eventos, streams y construido sobre del motor de Javascript V8, que es con el que funciona el Javascript de Google Chrome. NodeJS se programa del lado del servidor, lo que indica que los procesos para el desarrollo de software en 'Node' se realizan de una manera muy diferente que los de Javascript del lado del cliente. Basándose en los conceptos de la programación asíncrona y la programación orientada a eventos, con la particularidad que los eventos en esta plataforma son orientados a cosas que suceden del lado del servidor y no del lado del cliente como los que conocemos anteriormente en Javascript 'común'. Express es un microframework basado en Node JS que nos permitirá desarrollar una API REST. Mediante Node JS + express + Mongo DB desarrollaremos una api rest realizando una operación de tipo CRUD de ejemplo (Create, read, update, delete)",
        category: "Programación",
        price: 20000,
        vacancies: 20,
        teacher: 20353630017,
        conditions: "Haber cusado Javascript II o realizar examen",
        ico: "https://iconape.com/wp-content/png_logo_vector/node-js.png",
    });

    // Agrega el cuarto curso adicional
    courses.push({
        name: "Publicidad en redes",
        description: "A medida que Internet evoluciona y gana en rapidez y potencia, y a su vez las computadoras y dispositivos móviles cada vez poseen mayores presetaciones, las redes socilales de imágen y video van ganando lugar y generando nuevas herramientas de confección y edición de contenido. La red social de imágenes lider actualmente es Instagram, que ha desarrollado Instagram Ads, herramienta que nos permitirá realizar campañas de marketing digital eficientes, aprovechando la gran cantidad de usuarios. La red social de video lider actualmente es Youtube, que pertenece a Google Inc. En este momento Youtube cuenta con varias posibilidades de desarrollo como herramienta de marketing digital ( videomarketing), que también analizaremos y practicaremos en este curso.",
        category: "Marketing",
        price: 18000,
        vacancies: 1,
        teacher: 20353630017,
        conditions: "Conocimientos generales sobre internet",
        ico: "https://iconape.com/wp-content/files/hl/203107/png/A4_Publicidade-logo.png"
    });


    // Lo guarda en el LocalStorage    
    UpdateLocalStorage("courses", courses)

    // Actualiza estadísticas y modal
    refreshStatistics()
    ListCourses()

};


function ListCourses() {
    let courses = getLS("courses") || []
    let html
    html = courses.map((course, index) =>
        `<li id="course_${index}" style="list-style: none;">
            <div class="row">

                <div class="col">${course.name}</div>

                <div class="col-auto">

                    <a id="edit_${index}" onclick="setModCourse('${course.name}')" class="btn-edit" ><i class="fas fa-pencil-alt"></i></a>

                    <a id="del_S2_${index}" style="display:none" onclick="DeleteCourse_S2(${index}, '${course.name}')" class="btn-deleteStronger"><i class="far fa-trash-alt"></i></a>

                </div>

                <div class="col-auto">
                    <a id="del_S1_${index}" onclick="DeleteCourse_S1(${index})" class="btn-delete"><i class="far fa-trash-alt"></i></a>
                </div>

            </div>
        </li>`
    ).join("")
    $("#ListCourses").html(html)
}

function DeleteCourse_S1(id) {

    customAlert("Si está seguro de eliminar el curso, haga click en el cesto de basura de la izquierda", 5000)

    $(`#edit_${id}`).hide()
    $(`#del_S2_${id}`).show()
    setTimeout(function() {
        $(`#edit_${id}`).show()
        $(`#del_S2_${id}`).hide()
    }, 5000);

}


const DeleteCourse_S2 = (id, courseName) => {

    let courses = getLS("courses") || []

    let Index = courses.findIndex(course => course.name == courseName)
    if (Index !== -1) courses.splice(Index, 1)

    UpdateLocalStorage("courses", courses)

    $(`#course_${id}`).remove()

}


const showAMB = () => {
    ListCourses()
    $('#Modal_ListCourses').modal('toggle')
}


const setModCourse = (courseName) => {

    let courses = getLS("courses") || []
    let index = courses.findIndex(course => course.name == courseName)

    // Recorre las propiedades del curso que se va a modificar, para cargarlo en los campos del formulario
    for (const key in courses[index]) $(`#txt${capFirstLetter(key)}`).val(courses[index][key])

    // Establece el ID del elemento a modificarse
    $("#txtMod").val(index)

    // Modales
    $('#AddCourse').modal('toggle')
    $('#Modal_ListCourses').modal('toggle')
}