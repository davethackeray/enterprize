# Version Control Strategy

## Git Branching Strategy

### Overview
To ensure we can quickly rollback if we encounter any unfixable errors, we will use a structured Git branching strategy. This approach ensures stability through thorough testing before merging changes into the `main` branch.

### Branches
- **main**: The stable branch containing production-ready code.
- **develop**: The integration branch for testing new features and fixes.
- **feature/**: Branches for developing new features or fixes.

### Workflow
1. **Feature Development**:
   - Create a new branch from `develop` for each feature or fix.
   - Name the branch `feature/feature-name`.
   - Develop and test the feature on the feature branch.

2. **Integration**:
   - Merge the feature branch into `develop` after thorough testing.
   - Resolve any conflicts and ensure all tests pass.

3. **Release**:
   - Merge stable changes from `develop` into `main`.
   - Tag the release with a version number (e.g., `v1.0.0`).

### Rollback
- In case of errors, revert to the last stable commit on the `main` branch.
- Use the following command to revert to a specific commit:
  ```sh
  git revert <commit-hash>
  ```

### Guidelines
- Ensure all changes are thoroughly tested before merging into `develop`.
- Maintain a clear commit history with descriptive messages.
- Tag each stable release for easy rollback points.

### Additional Notes
- Regularly update the `build-journal.md` with insights and reflections on the development process.
- Ensure the GitHub repository is updated after each task or major fix for version control.
- Ensure the `.env` file is updated with the `GEMINI_API_KEY`.
- Maintain clear and comprehensive documentation to assist future engineers in understanding the project structure and workflow.

This strategy provides a structured approach to development, ensuring stability and easy rollback in case of errors.