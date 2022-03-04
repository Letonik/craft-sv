const LocationModel = require('../models/location');
const TemplatesModel = require('../models/templates');

class TempsController {
    async createNew(req, res) {
        try {
            const {code, name} = req.body;
            const location = await LocationModel.findOne({code});
            const temp = new TemplatesModel({
                name,
                deskHtml: 'eyJST09UIjp7InR5cGXECHJlc29sdmVkTmFtZSI6IkFwcENvbnRhaW5lciJ9LCJpc0NhbnZhcyI6dHJ1ZSwicHJvcHPEOHBhZGRpbmciOlsiMCIsywRdLCJiYWNrZ3JvdW5kxWIiOjI1NSwiZ8cIYscIYSI6MX0sImNvbG9yxygwxSYwxSQwySJ3aWR0aCI6IjEwMCUiLCJoZWlnaHQiOiJhdXRvIiwibWluSMgTNTAwcHgiLCJib3hTaXrlAKAiYm9yZGVyLWJveOQA0WRpc3BsYXnnAO/qAOwsImN1c3RvbeQAis4kQXBwxDloaWRkZW4iOmZhbHNlLCJub2Rlc+QA/mxPZE84UnRwUuUA+2xpbmtlZE7GHXt9fSzMIPoBd1R3b0NvbHVtbnNHcmlk7gF5x3HwAXpX5wEW5AF2xxPpAQcxIiwiZ2FwIjoiMvIA9DIgQ29s7ADwfcRBcmVuxDrlAh/5AO3xAOEiaW1MZXNmxDp3aF85ZDhhQjFwIiwiaW0yc2luNCI6ImVLelV3QWlHX0gi5AEOyyb6AQ5JbWFnZf0CfmdyaWRBcmVhIjoi5ADLc3JjIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3Zlci5qcGci5gC7Ijoi7AJD5QJT8QEi5gCA9wEi6wHQ/wEo7AEod293MzMiOiJEaGN4VUtZQTdf5QEP6wEe/wEP/wEP6QEP5ALK/wEP/wEP/wEP/wEP/wEP7wEPYlc0V1NSQi13QeUBD+sBHvoBD0ZvckRyb+UDlPkBEWZsZXhEaXJlY3Rpb24iOuQEZXVtbiIsImp1c3RpZnnkA/jmAMBzcGFjZS1h5gSuLCJhbGlnbkl0ZW1zxDZlbnTlBBv/AVHlAVHxATfQotC10LrRgdGCINC4INCa0L3QvtC/0LrQuPgBTO0DQ/8BTO0EZOsBR/8BOP8BOP8BOP8BOP8BOP8BOP8BOPsBOOsDRv8BOO0BOH0=',
                tabletHtml: 'eyJST09UIjp7InR5cGXECHJlc29sdmVkTmFtZSI6IkFwcENvbnRhaW5lciJ9LCJpc0NhbnZhcyI6dHJ1ZSwicHJvcHPEOHBhZGRpbmciOlsiMCIsywRdLCJiYWNrZ3JvdW5kxWIiOjI1NSwiZ8cIYscIYSI6MX0sImNvbG9yxygwxSYwxSQwySJ3aWR0aCI6IjEwMCUiLCJoZWlnaHQiOiJhdXRvIiwibWluSMgTNTAwcHgiLCJib3hTaXrlAKAiYm9yZGVyLWJveOQA0WRpc3BsYXnnAO/qAOwsImN1c3RvbeQAis4kQXBwxDloaWRkZW4iOmZhbHNlLCJub2Rlc+QA/mxPZE84UnRwUuUA+2xpbmtlZE7GHXt9fSzMIPoBd1R3b0NvbHVtbnNHcmlk7gF5x3HwAXpX5wEW5AF2xxPpAQcxIiwiZ2FwIjoiMvIA9DIgQ29s7ADwfcRBcmVuxDrlAh/5AO3xAOEiaW1MZXNmxDp3aF85ZDhhQjFwIiwiaW0yc2luNCI6ImVLelV3QWlHX0gi5AEOyyb6AQ5JbWFnZf0CfmdyaWRBcmVhIjoi5ADLc3JjIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3Zlci5qcGci5gC7Ijoi7AJD5QJT8QEi5gCA9wEi6wHQ/wEo7AEod293MzMiOiJEaGN4VUtZQTdf5QEP6wEe/wEP/wEP6QEP5ALK/wEP/wEP/wEP/wEP/wEP7wEPYlc0V1NSQi13QeUBD+sBHvoBD0ZvckRyb+UDlPkBEWZsZXhEaXJlY3Rpb24iOuQEZXVtbiIsImp1c3RpZnnkA/jmAMBzcGFjZS1h5gSuLCJhbGlnbkl0ZW1zxDZlbnTlBBv/AVHlAVHxATfQotC10LrRgdGCINC4INCa0L3QvtC/0LrQuPgBTO0DQ/8BTO0EZOsBR/8BOP8BOP8BOP8BOP8BOP8BOP8BOPsBOOsDRv8BOO0BOH0=',
                phoneHtml: 'eyJST09UIjp7InR5cGXECHJlc29sdmVkTmFtZSI6IkFwcENvbnRhaW5lciJ9LCJpc0NhbnZhcyI6dHJ1ZSwicHJvcHPEOHBhZGRpbmciOlsiMCIsywRdLCJiYWNrZ3JvdW5kxWIiOjI1NSwiZ8cIYscIYSI6MX0sImNvbG9yxygwxSYwxSQwySJ3aWR0aCI6IjEwMCUiLCJoZWlnaHQiOiJhdXRvIiwibWluSMgTNTAwcHgiLCJib3hTaXrlAKAiYm9yZGVyLWJveOQA0WRpc3BsYXnnAO/qAOwsImN1c3RvbeQAis4kQXBwxDloaWRkZW4iOmZhbHNlLCJub2Rlc+QA/mxPZE84UnRwUuUA+2xpbmtlZE7GHXt9fSzMIPoBd1R3b0NvbHVtbnNHcmlk7gF5x3HwAXpX5wEW5AF2xxPpAQcxIiwiZ2FwIjoiMvIA9DIgQ29s7ADwfcRBcmVuxDrlAh/5AO3xAOEiaW1MZXNmxDp3aF85ZDhhQjFwIiwiaW0yc2luNCI6ImVLelV3QWlHX0gi5AEOyyb6AQ5JbWFnZf0CfmdyaWRBcmVhIjoi5ADLc3JjIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3Zlci5qcGci5gC7Ijoi7AJD5QJT8QEi5gCA9wEi6wHQ/wEo7AEod293MzMiOiJEaGN4VUtZQTdf5QEP6wEe/wEP/wEP6QEP5ALK/wEP/wEP/wEP/wEP/wEP7wEPYlc0V1NSQi13QeUBD+sBHvoBD0ZvckRyb+UDlPkBEWZsZXhEaXJlY3Rpb24iOuQEZXVtbiIsImp1c3RpZnnkA/jmAMBzcGFjZS1h5gSuLCJhbGlnbkl0ZW1zxDZlbnTlBBv/AVHlAVHxATfQotC10LrRgdGCINC4INCa0L3QvtC/0LrQuPgBTO0DQ/8BTO0EZOsBR/8BOP8BOP8BOP8BOP8BOP8BOP8BOPsBOOsDRv8BOO0BOH0='
            })
            location.temps.push(temp);
            location.markModified('temps');
            await location.save()
            const locations = await LocationModel.find();
            return res.json(locations);
        } catch (e) {
            console.log(e)
        }
    }

    async setActive(req, res) {
        try {
            const {code, id} = req.body;
            const location = await LocationModel.findOne({code});
            for (let i of location.temps) {
                if (i.active == true) {
                    i.active = false
                    location.markModified('temps');
                    await location.save()
                    break
                }
            }
            for (let i of location.temps) {
                if (i._id == id) {
                    i.active = true
                    location.markModified('temps');
                    await location.save()
                    break
                }
            }
            const locations = await LocationModel.find();
            return res.json(locations);
        } catch (e) {
            console.log(e)
        }
    }
    async saveCode(req, res) {
        try {
            const {code, id, html, device} = req.body;
            const location = await LocationModel.findOne({code});
            for (let i of location.temps) {
                if (i._id == id) {
                    if (device === 'desktop') {
                        i.deskHtml = html
                    }
                    if (device === 'tablet') {
                        i.tabletHtml = html
                    }
                    if (device === 'phone') {
                        i.phoneHtml = html
                    }
                    location.markModified('temps');
                    await location.save()
                    break
                }
            }
            return res.json('Ok');
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new TempsController();