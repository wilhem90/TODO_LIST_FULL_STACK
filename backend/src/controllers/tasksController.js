const getAll = (req, res) => {
    return res.status(200).json({
        userId: '001',
        userName: 'Wilhem Wundt Maxime',
        userCreate_AT: '12-12-2022'
    })
}

module.exports = {
    getAll
}