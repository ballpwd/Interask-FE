const url = require('url');

module.exports = (req, res, next)=> {
    let url_parts = url.parse(req.get('referer'));
    const redirectTo = url_parts.pathname;
    req.session.redirectTo = redirectTo ;
    next();
}