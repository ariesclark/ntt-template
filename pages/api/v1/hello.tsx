export default (request, response) => {
    response.statusCode = 200;
    response.json({ hello: true });
};
