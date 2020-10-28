

// Anadir un objeto de atributos a un elemento
const addAttributes = (element, attrObj) => {
    for (let attr in attrObj) {
        if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr,attrObj[attr])
    }
}

// Crear elementos con atributos e hijo
const createCustomElement = (element,attribute,children) => {
    let customElement = document.createElement(element)
    if (children!== undefined) children.forEach(el => {
        if (el.nodeType) {
            if (el.nodeType === 1 || el.nodeType === 11)
            customElement.appendChild(el)
        } else {
            customElement.innerHTML += el
        }
    })
    addAttributes(customElement,attribute)
    return customElement
}

// Imprimir modal
const printModal = content => {
    // Crear contenedor interno
    const modalContentEl = createCustomElement ('div', {
        id: 'ed-modal-content',
        class: 'ed-modal-content'
    }, [content]),

    // Crear contenedor principal
    modalContainerEl = createCustomElement ('div', {
        id: 'ed-modal-container',
        class: 'ed-modal-container'
    }, [modalContentEl])

    // Imprimir el modal
    document.body.appendChild(modalContainerEl)

    // Remover modal
    const removeModal = () => document.body.removeChild(modalContainerEl)
    modalContainerEl.addEventListener ('click', e => {
        if (e.target === modalContainerEl) removeModal()
    })
}
