let json = '{"age":30}';
try {
    try {
        let user = JSON.parse(json);
        if (!user.name) {
            throw new SyntaxError("no name");
        }
        console.log(user.name);
    } catch (e) {
        console.log("JSON Error:" + e.message);
        throw e;
    }
} catch (e) {
    console.log(e.message);
}

