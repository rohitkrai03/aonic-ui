# @aonic-ui/pipelines

## 1.1.0

### Minor Changes

- e44299e: Added core tekton types
  Added integration utils, hooks and sample data helpers

### Patch Changes

- db3639d: replace static image repo string with actual image link
- f18f066: add tab auto selection based on the availability of the tab data

## 1.0.1

### Patch Changes

- 987b97a: Update react-table from devDependancies to dependancies
  export the output component types

## 1.0.0

### Major Changes

- 5b75204: ### New features

  - Output Component https://github.com/redhat-developer/aonic-ui/pull/7

    - Added Enterprise contract, Advanced cluster security and Other pipelinerun result sections. Each section is conditionally rendered based on the availablity of the data and provides overview, summary and report. These are expandable/collapsable sections and provides ability to filter and sort by the columns.
    - Enterprise contract card
      - EC policy report information is visualized in tabular format.
    - Advanced Cluster security card
      - ACS card visualizes the security scan/check reports in tabular format. It supports three subtabs namely Image Scan, Image check and Deployment check.
    - Other results card
      - This section renders the key/value pairs in tabular format.
