"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
// import dateFormat from "dateformat";
const pg_1 = require("pg");
class connection {
    /**
     * Create connection by Singletone method. If connection is not created, then only new connection will create.
     */
    getConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!connection.connection) {
                let result = yield this.connect();
                if (!result)
                    return false;
            }
            return connection.connection;
        });
    }
    /**
     * This function will connect DB with required DB credentials.
     */
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            connection.connection = new pg_1.Pool({
                connectionString: process.env.DATABASE_URL
            });
            try {
                // /* Convert "timestamp without timezone" into local timezone. eg. 2019-01-23T10:25:33.000Z --> 2019-01-23 15:55:33 */
                // var datetimeParseFn = function (val: any) {
                // 	return val === null ? null : dateFormat(val, 'yyyy-mm-dd HH:MM:ss');
                // }
                // /* Convert "date" into local date without timezone. eg. 2019-10-28T18:30:00.000Z --> 2019-10-29 */
                // var dateParseFn = function (val: any) {
                // 	return val === null ? null : dateFormat(val, 'yyyy-mm-dd');
                // }
                // types.setTypeParser(types.builtins.TIMESTAMP, datetimeParseFn);
                // types.setTypeParser(types.builtins.DATE, dateParseFn);
                let result = yield connection.connection.connect();
                if (result) {
                    console.log('Database Connected!');
                }
                return result;
            }
            catch (error) {
                console.log(error);
                connection.connection = false;
                return false;
            }
        });
    }
}
exports.connection = connection;
