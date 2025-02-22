import React from 'react';
import { Label } from '@patternfly/react-core';
import {
  AngleDoubleDownIcon,
  AngleDoubleUpIcon,
  CheckCircleIcon,
  CriticalRiskIcon,
  CubeIcon,
  DotCircleIcon,
  EqualsIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  ShieldVirusIcon,
} from '@patternfly/react-icons/dist/js/icons';
import { global_danger_color_100 as redColor } from '@patternfly/react-tokens/dist/js/global_danger_color_100';
import { global_palette_blue_300 as lowColor } from '@patternfly/react-tokens/dist/js/global_palette_blue_300';
import { global_palette_gold_400 as moderateColor } from '@patternfly/react-tokens/dist/js/global_palette_gold_400';
import { global_palette_orange_300 as importantColor } from '@patternfly/react-tokens/dist/js/global_palette_orange_300';
import { global_palette_red_200 as criticalColor } from '@patternfly/react-tokens/dist/js/global_palette_red_200';
import { global_success_color_100 as greenColor } from '@patternfly/react-tokens/dist/js/global_success_color_100';
import { global_warning_color_100 as yellowColor } from '@patternfly/react-tokens/dist/js/global_warning_color_100';
import {
  ACS_BREAKING_CHANGES,
  ACS_IMAGE_CHECK_SEVERITY,
  ACS_SCAN_RESULTS,
  ACS_STATUS,
  ACSCheckResults,
  ACSImageScanSummary,
  ENTERPRISE_CONTRACT_POLICY_STATUS,
} from '../types';
import { toPascalCase } from './helper-utils';

const getECStatusIcon = (status: ENTERPRISE_CONTRACT_POLICY_STATUS): React.ReactNode => {
  switch (status) {
    case ENTERPRISE_CONTRACT_POLICY_STATUS.successes:
      return <CheckCircleIcon data-testid="success-icon" color={greenColor.value} />;
    case ENTERPRISE_CONTRACT_POLICY_STATUS.failed:
      return <ExclamationCircleIcon data-testid="failed-icon" color={redColor.value} />;
    case ENTERPRISE_CONTRACT_POLICY_STATUS.warnings:
      return <ExclamationTriangleIcon data-testid="warning-icon" color={yellowColor.value} />;
    default:
      return <span>-</span>;
  }
};

export const getRuleStatus = (type: ENTERPRISE_CONTRACT_POLICY_STATUS): React.ReactNode => {
  return (
    <>
      {getECStatusIcon(type)} {type}
    </>
  );
};

export const getECStatusLabel = (status: ENTERPRISE_CONTRACT_POLICY_STATUS): React.ReactNode => {
  return status.length > 0 ? (
    <Label variant="outline" icon={getECStatusIcon(status)}>
      {status}
    </Label>
  ) : null;
};

export const getACStatusLabel = (issuesFound: boolean): React.ReactNode => {
  return issuesFound ? (
    <Label
      variant="outline"
      data-testid="issues-found-label"
      icon={getECStatusIcon(ENTERPRISE_CONTRACT_POLICY_STATUS.failed)}
    >
      Issues found
    </Label>
  ) : null;
};

export const getSeverityIcon = (severity: string): React.ReactNode => {
  switch (toPascalCase(severity)) {
    case 'Critical':
      return (
        <CriticalRiskIcon
          data-testid="critical-icon"
          title={severity}
          color={criticalColor.value}
        />
      );
    case 'High':
    case 'Important':
      return (
        <AngleDoubleUpIcon
          title={severity}
          data-testid="important-or-high-icon"
          color={importantColor.value}
        />
      );

    case 'Moderate':
    case 'Medium':
      return (
        <EqualsIcon
          title={severity}
          data-testid="moderate-or-medium-icon"
          color={moderateColor.value}
        />
      );
    case 'Low':
      return <AngleDoubleDownIcon data-testid="low-icon" title={severity} color={lowColor.value} />;
    default:
      return (
        <>
          <DotCircleIcon data-testid="missing-icon" /> Missing
        </>
      );
  }
};

export const getSeverityWithIcon = (severity: string): React.ReactNode => {
  return (
    <>
      {getSeverityIcon(severity)} {toPascalCase(severity)}
    </>
  );
};
export const getBreakingChangeStatus = (
  status: string,
  cveSummary: Record<string, number>,
): React.ReactNode => {
  switch (status) {
    case ACS_BREAKING_CHANGES.Breaking:
      return (
        <>
          <ExclamationTriangleIcon title={status} color={redColor.value} />{' '}
          <b>{cveSummary?.[status]}</b> violations breaks build
        </>
      );
    case ACS_BREAKING_CHANGES.NotBreaking:
      return (
        <>
          <ExclamationTriangleIcon title={status} color={yellowColor.value} />{' '}
          <b>{cveSummary?.[status]}</b> violations not breaking builds
        </>
      );

    default:
      return (
        <>
          <DotCircleIcon /> Missing
        </>
      );
  }
};

export const getCVEFixableStatus = (
  status: string,
  cveSummary: Record<string, number>,
): React.ReactNode => {
  switch (status) {
    case ACS_STATUS.Fixable:
      return (
        <>
          <CheckCircleIcon title={status} color={greenColor.value} /> <b>{cveSummary?.[status]}</b>{' '}
          vulnerabilities with available fixes
        </>
      );
    case ACS_STATUS.Unavailable:
      return (
        <>
          <ExclamationTriangleIcon title={status} color={yellowColor.value} />{' '}
          <b>{cveSummary?.[status]}</b> vulnerabilities without fixes
        </>
      );

    default:
      return (
        <>
          <DotCircleIcon /> Missing
        </>
      );
  }
};

export const getCVEScanResults = (
  status: string,
  cveSummary: ACSImageScanSummary,
): React.ReactNode => {
  switch (status) {
    case ACS_SCAN_RESULTS.Vulnerabilites:
      return (
        <>
          <ShieldVirusIcon title={status} /> <b>{cveSummary?.['TOTAL-VULNERABILITIES']}</b>{' '}
          vulnerabilities
        </>
      );
    case ACS_SCAN_RESULTS.Components:
      return (
        <>
          <CubeIcon title={status} /> <b>{cveSummary?.['TOTAL-COMPONENTS']}</b> components
        </>
      );

    default:
      return (
        <>
          <DotCircleIcon /> Missing
        </>
      );
  }
};

export const SummaryTextAndCount: React.FC<{
  text: React.ReactNode;
  count?: number;
}> = ({ text, count }): React.ReactNode => (
  <>
    <span style={{ marginRight: 'var(--pf-v5-global--spacer--sm)' }}>{text}</span>{' '}
    {count && <b>{count}</b>}
  </>
);

export const getCheckSeveritySummary = (data: ACSCheckResults) => ({
  [ACS_IMAGE_CHECK_SEVERITY.Critical]: data.results?.[0]?.summary?.CRITICAL,
  [ACS_IMAGE_CHECK_SEVERITY.High]: data.results?.[0]?.summary?.HIGH,
  [ACS_IMAGE_CHECK_SEVERITY.Medium]: data.results?.[0]?.summary?.MEDIUM,
  [ACS_IMAGE_CHECK_SEVERITY.Low]: data.results?.[0]?.summary?.LOW,
});
