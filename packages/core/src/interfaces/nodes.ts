import React from "react";

export type NodeId = string;

export type Node =  {
  id: NodeId;
  data: NodeData;
  events: NodeRefEvent;
  dom: HTMLElement;
  related: Record<string, React.ElementType>;
  rules: NodeRules;
}

export type NodeEvents = 'active' | 'dragging' | 'hover';
export type InternalNode = Pick<Node, 'id'> & NodeData
export type NodeRefEvent = Record<NodeEvents, boolean>
export type NodeRules = {
  canDrag(node: Node): boolean;
  canMoveIn?(canMoveIn: Node, self: Node): boolean;
  canMoveOut?(canMoveOut: Node, self: Node): boolean;
}

export type NodeData = {
  props: Record<string, any>,
  type: string | React.ElementType;
  name: string,
  displayName: string,
  isCanvas?: boolean;
  parent: NodeId;
  index?: number;
  _childCanvas?: Record<string, NodeId>
  nodes?: NodeId[];
  hidden?: boolean;
  custom?: any;
}

export type ReduceCompType = string | {
  resolvedName: string
}

export type ReducedComp = {
  type: ReduceCompType
  isCanvas?: boolean
  props: any
}

export type SerializedNodeData = Omit<NodeData, 'type' | 'subtype' | 'name' | 'event'> & ReducedComp

export type Nodes = Record<NodeId, Node>
export type TreeNode = Node & {children?: any}

