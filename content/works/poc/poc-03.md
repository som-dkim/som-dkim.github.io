---
id: poc-03
period: "2025"
title: TinkerBell — 솔로프리너 AI 어시스턴트
summary: LangGraph 멀티에이전트로 1인 창업자의 기획·마케팅·일정·고객응대·심리 부담을 통합 보조하는 AI 플랫폼.
tags:
  - LangGraph
  - RAG
  - Multi-Agent
  - PoC
galleryId: poc-03
---

## Overview

솔로프리너(1인 창업자)는 기획·마케팅·고객응대·일정 관리를 혼자 담당해야 하는 구조적 한계를 갖습니다. TinkerBell은 LangGraph 기반 멀티에이전트 워크플로우로 이 과부하를 분산시키는 AI 플랫폼입니다. 사업기획·마케팅·고객응대·멘탈코칭·업무지원 5개 도메인 에이전트가 협업(A2A)해 사용자의 자연어 요청을 실제 업무 자동화(캘린더 등록, SNS 발행, 이메일 발송)까지 연결합니다. 5인 팀 구성으로 2025년 6~8월 8주간 개발했으며, PL 및 AI 아키텍처 전반을 담당했습니다.

## Problem

- 솔로프리너는 기획·마케팅·고객응대·일정 관리 전 과정을 혼자 처리해야 해, 특정 영역에 집중하면 다른 영역이 공백이 됩니다.
- 기존 챗봇은 단발 질의응답에 그쳐 실제 업무(SNS 발행, 일정 등록, 이메일 발송 등)를 대신 수행하지 못합니다.
- 업무별로 흩어진 SaaS 툴을 오가며 맥락을 유지하는 것 자체가 인지 부담입니다.

## Role & Scope

- PL로서 전체 요구사항 정의, WBS 수립, 팀 일정 관리를 담당했습니다.
- LangGraph 기반 멀티에이전트 워크플로우(직렬·병렬·조건 분기) 전체 설계 및 구현을 담당했습니다.
- RAG 파이프라인 구성, QDrant 벡터DB 운영 전략, 도메인별 청크 설계를 담당했습니다.
- 사용자 컨텍스트 기반 Memory 설계 및 멀티턴 대화 흐름(진행률 기반 후속 질문 자동 생성) 구현을 담당했습니다.
- Google Calendar·Instagram·Email 등 외부 API 및 MCP 서버(Naver Search, YouTube Trend 등) 연동 구조를 담당했습니다.

## Approach

- Router Agent가 자연어 요청의 의도와 도메인을 분류한 뒤, 관련 에이전트(사업기획·마케팅·고객응대·멘탈코칭·업무지원)로 단일 또는 병렬 라우팅합니다.
- 각 에이전트는 RAG로 도메인 지식을 조회하고, 처리 결과(콘텐츠·일정·태스크)를 업무지원 Agent로 전달해 자동화 액션(캘린더 등록, SNS 발행, 이메일 발송)을 실행합니다.
- LangGraph state에 대화 이력과 수집 정보를 저장해 멀티턴 흐름을 유지하고, 필수 정보가 모이면 후속 질문 없이 바로 처리합니다.
- GPT-4o-mini(기획·상담 고품질)와 Gemini 2.0 Flash(빠른 자동화)를 난이도·속도 요건에 따라 동적으로 분기합니다.

## Tech Stack

- LangChain · LangGraph — 멀티에이전트 워크플로우, RAG 파이프라인
- GPT-4o-mini · Gemini 2.0 Flash — 하이브리드 LLM 전략
- QDrant · text-embedding-3-small — 도메인별 벡터DB 및 유사도 검색
- FastAPI · Python — 비동기 API 서버, OAuth 2.0 인증
- MCP Server(Naver Search, YouTube Trend, Instagram Hashtag 등) — 외부 실시간 정보 수집
- Google Calendar · Google Tasks · Instagram · Email API — 업무 자동화 액션
- React · TypeScript — 채팅 인터페이스 + 자동화 대시보드
- AWS EC2 · RDS · S3 · GitHub Actions — 인프라 및 CI/CD

## Outcome

- 사업기획 → 마케팅 콘텐츠 생성 → SNS 자동 발행, 일정 자동 등록까지 엔드투엔드 시나리오 데모를 완료했습니다.
- 의미 기반 청크 분할로 벡터 검색 품질을 개선하고, LLM 하이브리드 전략으로 평균 응답 속도를 약 35% 단축했습니다.
- 진행률 기반 대화 종료 조건 체크 로직을 도입해 불필요한 후속 질문 문제를 해결했습니다.
- 후속: Streaming 응답, Redis 클러스터링, 소상공인 정책 자동 수집, 고객용 챗봇 자동 생성 기능 고도화.
