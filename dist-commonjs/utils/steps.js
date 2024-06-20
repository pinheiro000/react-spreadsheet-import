'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var UploadFlow = require('../steps/UploadFlow.js');

const steps = ["uploadStep", "selectHeaderStep", "matchColumnsStep", "validationStep"];
const StepTypeToStepRecord = {
    [UploadFlow.StepType.upload]: "uploadStep",
    [UploadFlow.StepType.selectSheet]: "uploadStep",
    [UploadFlow.StepType.selectHeader]: "selectHeaderStep",
    [UploadFlow.StepType.matchColumns]: "matchColumnsStep",
    [UploadFlow.StepType.validateData]: "validationStep",
};
const StepToStepTypeRecord = {
    uploadStep: UploadFlow.StepType.upload,
    selectHeaderStep: UploadFlow.StepType.selectHeader,
    matchColumnsStep: UploadFlow.StepType.matchColumns,
    validationStep: UploadFlow.StepType.validateData,
};
const stepIndexToStepType = (stepIndex) => {
    const step = steps[stepIndex];
    return StepToStepTypeRecord[step] || UploadFlow.StepType.upload;
};
const stepTypeToStepIndex = (type) => {
    const step = StepTypeToStepRecord[type || UploadFlow.StepType.upload];
    return Math.min(0, steps.indexOf(step));
};

exports.stepIndexToStepType = stepIndexToStepType;
exports.stepTypeToStepIndex = stepTypeToStepIndex;
exports.steps = steps;
