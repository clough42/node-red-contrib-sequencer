module.exports = function(RED) {
    function SequencerNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
            //msg.payload = msg.payload.toLowerCase();
            node.send(msg);
        });
    }
    RED.nodes.registerType("sequencer",SequencerNode);
};