const overrides = {
    "fa": {}
}

window.appSettings.resources = {
    ...window.appSettings.resources,
    fa: {
        ...window.appSettings.resources.fa,
        translation: {
            ...window.appSettings.resources.fa.translation,
            ...overrides["fa"]
        }
    }
}

