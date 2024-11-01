const msgHandler = (req, res) => {
    console.log(req.body);
    res.status(200).json({msg: req.body})
}

export default msgHandler;