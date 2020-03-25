// import createEngine, { DiagramModel, DefaultNodeModel } from '@projectstorm/react-diagrams';

import * as React from 'react';
// import { DemoButton, DemoWorkspaceWidget } from '@projectstorm/react-diagrams/helpers/DemoWorkspaceWidget';
// import { action } from '@storybook/addon-actions';
// import * as beautify from 'json-beautify';
import createEngine, {
    DefaultLinkModel,
    DefaultNodeModel,
    DiagramModel
} from '@projectstorm/react-diagrams';
import './main.css'
import './styles.css'

import { CanvasWidget } from '@projectstorm/react-canvas-core';
// import { DemoCanvasWidget } from '../helpers/DemoCanvasWidget';

// import styled from '@emotion/styled';
class Flowchart extends React.Component {

    render() {
        //1) setup the diagram engine
        var engine = createEngine();
        // node 1
        const node1 = new DefaultNodeModel({
            name: 'Node 1',
            color: 'rgb(0,192,255)',
        });
        node1.setPosition(100, 100);
        let port1 = node1.addOutPort('Out');

        // node 2
        const node2 = new DefaultNodeModel({
            name: 'Node 2',
            color: 'rgb(0,192,255)',
        });
        node2.setPosition(100, 200);
        let port2 = node2.addOutPort('Out');

        const link = port1.link<DefaultLinkModel>(port2);
        // link.addLabel('Hello World!');


        const model = new DiagramModel();
        model.addAll(node1, node2, link);
        engine.setModel(model);

        // //2) setup the diagram model
        // var model = new DiagramModel();

        // //3-A) create a default node
        // var node1 = new DefaultNodeModel('Node 1', 'rgb(0,192,255)');
        // var port1 = node1.addOutPort('Out');
        // node1.setPosition(100, 100);

        // //3-B) create another default node
        // var node2 = new DefaultNodeModel('Node 2', 'rgb(192,255,0)');
        // var port2 = node2.addInPort('In');
        // node2.setPosition(400, 100);

        // //3-C) link the 2 nodes together
        // var link1 = port1.link(port2);

        // //4) add the models to the root graph
        // model.addAll(node1, node2, link1);

        // //5) load model into engine
        // engine.setModel(model);

        // //!------------- SERIALIZING ------------------

        // var str = JSON.stringify(model.serialize());

        // //!------------- DESERIALIZING ----------------

        // var model2 = new DiagramModel();
        // model2.deserializeModel(JSON.parse(str), engine);
        // engine.setModel(model2);
        // console.log(model2)
        return (<div className="Flowchart">
            <CanvasWidget
                engine={engine} />
        </div >
        );
    };
}
export default Flowchart;
