export function ProfileClean(data) {
    const new_data = {}
    const excludes = ["id", "is_admin", "image_url", "date_registered"]


    Object.keys(data).map(field => {
        if (!excludes.includes(field)) {
            new_data[field] = data[field]
        }
    } )

    console.log(new_data)

    return new_data
}