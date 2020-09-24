"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.listen(process.env.PORT, function () {
    "Server is listening to " + process.env.PORT;
});
app.get('*', function (req, res) {
    res.send('IT WORKS!');
});
//# sourceMappingURL=index.js.map